import { DictionaryResponse, Definition } from "../types/response";

export function transformFunction(res: DictionaryResponse[]): Definition[] {
  const allMeaning = res.map((meaningObject) =>
    meaningObject.meanings.map(({ definitions }) =>
      definitions.map(({ definition, example }) => ({ definition, example }))
    )
  );

  return allMeaning.flat(2);
}
