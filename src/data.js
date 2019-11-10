const exampleInput = {
  stagedApply: {
    roleRequirements: {
      "question-6": ["I'm an Australian citizen"],
      "question-14": ["Tuesday 8am-6pm", "Thursday 8am-6pm"],
      "question-910de548-8616-4b37-b6dc-10a63f08a05c": "some expo testing"
    }
  }
}

const exampleOutput = {
  questionnaire: [
    { questionId: "6", answers: ["I'm an Australian citizen"] },
    { questionId: "14", answers: ["Tuesday 8am-6pm", "Thursday 8am-6pm"] },
    { questionId: "910de548-8616-4b37-b6dc-10a63f08a05c", answers: ["some expo testing"]}
  ],
  timeApplied: "2019-11-10T01:57:24.793Z"
}
