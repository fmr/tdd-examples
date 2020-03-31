export function transformData(input) {
  if (!input) {
    throw Error("need data");
  }

  const { roleRequirements } = input;

  if (!roleRequirements) {
    return {};
  }

  const questions = Object.keys(roleRequirements)
    .map((key) => {
      const [, questionId] = key.split("-");
      return { questionId, answers: roleRequirements[key] };
    })
    .filter((question) => question.questionId);

  return { questionnaire: questions };
}
