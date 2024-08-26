function result(result2) {
  console.log(result2);
}

function callback(result) {
  result.json().then(result);
}

const sendObj = {
  method: "GET",
};

fetch("localhost:3000/handlesumqueryparams?counter=10 ", sendObj).then(
  callback
);
