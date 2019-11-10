export const transformData = (input) => {

  if (!input) throw Error('need data')

  let questions = []

  if (input && input.stagedApply && input.stagedApply.roleRequirements) {
    const { roleRequirements } = input.stagedApply;

    Object.keys(roleRequirements).forEach((key) => {
      const questionId = key.split('-')[1]

      if (questionId)
        questions.push({questionId: questionId, answers: roleRequirements[key]})
    })

    return {questionnaire: questions}
  }

  return {}
}