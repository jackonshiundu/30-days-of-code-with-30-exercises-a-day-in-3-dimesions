// Catchig error with wrong json format

const wrong_json_fomat = (jsonString) => {
  try {
    const parsed_json = JSON.parse(jsonString);
    console.log("parsed Jaon", parsed_json);
  } catch (error) {
    if (error instanceof SyntaxError) {
      return console.log("SyntaxError:", error.message);
    }
    console.log("Error:", error.message);
  }
};
wrong_json_fomat({ name: "Rowan Octave", age: 30 });
