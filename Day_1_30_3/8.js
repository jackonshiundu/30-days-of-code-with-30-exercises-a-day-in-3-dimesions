//Exvaluation Error EvalError

function EvalErrorCatched(exp) {
  try {
    const results = eval(exp);
    console.log(results);
  } catch (error) {
    if (error instanceof EvalError) {
      console.log("Eval error", error.message);
    } else {
      console.log(error);
    }
  }
}
EvalErrorCatched("3 + ");
