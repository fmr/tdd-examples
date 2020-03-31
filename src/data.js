const exampleInput = {
  roleRequirements: {
    "question-1": ["I'm an Australian citizen"],
    "question-2": ["Tuesday 8am-6pm", "Thursday 8am-6pm"],
    "question-910de548-8616-4b37-b6dc-10a63f08a05c": "some expo testing",
  },
};

const exampleOutput = {
  questionnaire: [
    { questionId: "1", answers: ["I'm an Australian citizen"] },
    { questionId: "2", answers: ["Tuesday 8am-6pm", "Thursday 8am-6pm"] },
    {
      questionId: "910de548-8616-4b37-b6dc-10a63f08a05c",
      answers: ["some expo testing"],
    },
  ],
};
