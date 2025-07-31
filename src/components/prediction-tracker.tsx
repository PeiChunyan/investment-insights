'use client'

import { useState } from 'react'
import { PredictionStatus } from '@/types'

interface Prediction {
  id: string
  content: string
  status: PredictionStatus
  targetDate?: string
  outcomeNote?: string
}

interface PredictionTrackerProps {
  predictions: Prediction[]
  onAddPrediction: (prediction: Omit<Prediction, 'id'>) => void
  onUpdatePrediction: (id: string, updates: Partial<Prediction>) => void
}

export function PredictionTracker({ 
  predictions, 
  onAddPrediction, 
  onUpdatePrediction 
}: PredictionTrackerProps) {
  const [isAddingPrediction, setIsAddingPrediction] = useState(false)
  const [newPrediction, setNewPrediction] = useState({
    content: '',
    targetDate: '',
    status: 'PENDING' as PredictionStatus
  })

  const handleAddPrediction = () => {
    if (newPrediction.content.trim()) {
      onAddPrediction({
        content: newPrediction.content,
        status: newPrediction.status,
        targetDate: newPrediction.targetDate || undefined
      })
      setNewPrediction({ content: '', targetDate: '', status: 'PENDING' })
      setIsAddingPrediction(false)
    }
  }

  const getStatusColor = (status: PredictionStatus) => {
    switch (status) {
      case 'CORRECT': return 'text-green-600'
      case 'INCORRECT': return 'text-red-600'
      case 'PARTIAL': return 'text-yellow-600'
      default: return 'text-gray-600'
    }
  }

  const getStatusDot = (status: PredictionStatus) => {
    switch (status) {
      case 'CORRECT': return 'bg-green-500'
      case 'INCORRECT': return 'bg-red-500'
      case 'PARTIAL': return 'bg-yellow-500'
      default: return 'bg-gray-400'
    }
  }

  return (
    <div className="border border-gray-200 p-6 mt-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-medium text-gray-900">Performance Tracking</h3>
        <button
          onClick={() => setIsAddingPrediction(!isAddingPrediction)}
          className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          + Add Prediction
        </button>
      </div>

      {isAddingPrediction && (
        <div className="mb-6 p-4 bg-gray-50 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Prediction
            </label>
            <textarea
              value={newPrediction.content}
              onChange={(e) => setNewPrediction(prev => ({ ...prev, content: e.target.value }))}
              placeholder="What do you predict will happen?"
              className="w-full px-3 py-2 border border-gray-200 text-sm focus:outline-none focus:border-gray-400 resize-none"
              rows={2}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Target Date (optional)
            </label>
            <input
              type="date"
              value={newPrediction.targetDate}
              onChange={(e) => setNewPrediction(prev => ({ ...prev, targetDate: e.target.value }))}
              className="px-3 py-2 border border-gray-200 text-sm focus:outline-none focus:border-gray-400"
            />
          </div>
          <div className="flex space-x-2">
            <button
              onClick={handleAddPrediction}
              className="px-4 py-1 bg-gray-900 text-white text-sm hover:bg-gray-700 transition-colors"
            >
              Add
            </button>
            <button
              onClick={() => setIsAddingPrediction(false)}
              className="px-4 py-1 border border-gray-200 text-sm hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {predictions.length === 0 ? (
          <p className="text-gray-500 text-sm">No predictions yet</p>
        ) : (
          predictions.map((prediction) => (
            <div key={prediction.id} className="flex items-start space-x-3 pb-4 border-b border-gray-100 last:border-b-0">
              <div className={`w-2 h-2 rounded-full mt-2 ${getStatusDot(prediction.status)}`} />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900">{prediction.content}</p>
                {prediction.targetDate && (
                  <p className="text-xs text-gray-500 mt-1">Target: {prediction.targetDate}</p>
                )}
                {prediction.outcomeNote && (
                  <p className="text-xs text-gray-600 mt-1 italic">{prediction.outcomeNote}</p>
                )}
              </div>
              <div className="flex-shrink-0">
                <select
                  value={prediction.status}
                  onChange={(e) => onUpdatePrediction(prediction.id, { 
                    status: e.target.value as PredictionStatus 
                  })}
                  className={`text-xs border-none focus:outline-none ${getStatusColor(prediction.status)}`}
                >
                  <option value="PENDING">Pending</option>
                  <option value="CORRECT">Correct</option>
                  <option value="INCORRECT">Incorrect</option>
                  <option value="PARTIAL">Partial</option>
                </select>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}