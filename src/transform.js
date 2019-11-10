export const transformData = (input) => {
  if (!input) throw Error('need data')

  let questions = []

  let stagedApply = input.stagedApply;
  let roleRequirements = stagedApply.roleRequirements

  if (input && stagedApply && roleRequirements) {
    Object.keys(roleRequirements).forEach((key) => {
      const questionId = key.split('-')[1]

      if (questionId)
        questions.push({questionId: questionId})
    })

    return {questionnaire: questions}
  }

  return {}
}