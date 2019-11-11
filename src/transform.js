export function transformData(input) {
  if (!input) {
    throw Error("need data");
  }
  if (input && input.stagedApply && input.stagedApply.roleRequirements) {
    const { roleRequirements } = input.stagedApply;

    const questions = Object.keys(roleRequirements).map(key => {
      const questionId = key.split('-')[1];
      return { questionId, answers: roleRequirements[key] };
    }).filter(question => question.questionId);

    return { questionnaire: questions};
  }
  return {};
}
