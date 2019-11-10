export const transformData = (input) => {
  if (!input) throw Error('need data')

  let questions = []

  if (input && input.stagedApply && input.stagedApply.roleRequirements) {
    Object.keys(input.stagedApply.roleRequirements).forEach((key) => {
      const questionId = key.split('-')[1]

      if (questionId)
        questions.push({questionId: questionId})
    })

    return {questionnaire: questions}
  }

  return {}
}