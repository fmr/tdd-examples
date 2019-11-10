export const transformData = (input) => {
  if (!input) throw Error('need data')

  if (input && input.stagedApply && input.stagedApply.roleRequirements)
    return {questionnaire: []}

  return {}
}