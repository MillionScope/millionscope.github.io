import React from "react"

export default function Page() {
  const evaluationData = [
    { models: ["Model A", "Model B"], scores: [1, -1, 0, 1, -1] },
    { models: ["Model C", "Model D"], scores: [0, 0, 1, -1, 0] },
    { models: ["Model E", "Model F"], scores: [-1, 1, 0, -1, 1] },
    { models: ["Model G", "Model H"], scores: [1, 0, -1, 1, 0] },
    { models: ["Model A", "Model C"], scores: [-1, 1, 0, -1, 0] },
    { models: ["Model B", "Model D"], scores: [1, 0, -1, 1, -1] },
    { models: ["Model E", "Model G"], scores: [0, 1, -1, 0, 1] },
    { models: ["Model F", "Model H"], scores: [1, -1, 0, 1, -1] },
  ]

  const data = [
    [0, 1, 0.8],
    [0, 2, -0.5],
    [0, 3, 0.2],
    [0, 4, 0.6],
    [0, 5, -0.3],
    [0, 6, 0.1],
    [0, 7, 0.9],
    [1, 2, -0.7],
    [1, 3, -0.2],
    [1, 4, 0.4],
    [1, 5, -0.6],
    [1, 6, -0.1],
    [1, 7, 0.7],
    [2, 3, 0.6],
    [2, 4, 0.9],
    [2, 5, 0.2],
    [2, 6, 0.5],
    [2, 7, 0.8],
    [3, 4, 0.3],
    [3, 5, -0.4],
    [3, 6, -0.1],
    [3, 7, 0.5],
    [4, 5, -0.8],
    [4, 6, -0.3],
    [4, 7, 0.2],
    [5, 6, 0.4],
    [5, 7, 0.9],
    [6, 7, 0.6],
  ]

  const models = [
    "Model A",
    "Model B",
    "Model C",
    "Model D",
    "Model E",
    "Model F",
    "Model G",
    "Model H",
  ]
  const inputs = Array.from({ length: 40 }, (_, i) => `Input ${i + 1}`)

  const generateScores = () => {
    const scores = [-1, 0, 1]
    return inputs.map((input) => ({
      modelPair: `${models[Math.floor(Math.random() * models.length)]} vs ${models[Math.floor(Math.random() * models.length)]}`,
      input: input,
      score: scores[Math.floor(Math.random() * scores.length)],
    }))
  }

  const heatmapData = [...generateScores()]

  return (
    <div>
      <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
        Leaderboard
      </h1>
      <h3 className="font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-8 text-2xl">
        Sample 1
      </h3>
      <p className="mt-6 leading-7 first:mt-0">
        Sample data of Evaluation Result.
      </p>
      <h3 className="font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-8 text-2xl">
        Sample 2
      </h3>
      <p className="mt-6 leading-7 first:mt-0">
        Sample data of Evaluation Result.
      </p>
      <h3 className="font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-8 text-2xl">
        Sample 3
      </h3>
      <p className="mt-6 leading-7 first:mt-0">
        Sample data of Evaluation Result.
      </p>
    </div>
  )
}
