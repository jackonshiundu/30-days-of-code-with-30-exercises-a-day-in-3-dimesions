//ReferenceError

function ReferenceErrorerror() {
  try {
    console.log(hello);
  } catch (error) {
    if (error instanceof ReferenceError) {
      console.log("Refrence Error", error.message);
    } else {
      console.log(error.message);
    }
  }
}

ReferenceErrorerror();
