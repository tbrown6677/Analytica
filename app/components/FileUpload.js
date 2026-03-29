'use client'

import { useState } from 'react'

export default function FileUpload({ onDataLoaded }) {
  const [fileName, setFileName] = useState('')

  function handleFile(e) {
    const file = e.target.files[0]
    if (!file) return

    setFileName(file.name)
    const reader = new FileReader()

    reader.onload = (event) => {
      onDataLoaded(event.target.result)
    }

    reader.readAsText(file)
  }

  return (
    <div className="border-2 border-dashed border-gray-700 hover:border-violet-500 rounded-xl p-8 text-center transition-colors">
      <input
        type="file"
        accept=".csv"
        onChange={handleFile}
        className="hidden"
        id="file-input"
      />
      <label htmlFor="file-input" className="cursor-pointer">
        <p className="text-gray-400 mb-2">Drop your CSV file here or click to upload</p>
        <p className="text-violet-400 text-sm font-medium">
          {fileName || 'No file selected'}
        </p>
      </label>
    </div>
  )
}