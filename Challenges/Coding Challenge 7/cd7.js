const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

const checkDogs = (dogsJulia, dogsKate) => {
  const dogsJuliaCorrected = dogsJulia.slice(1, -2);
  const allDogs = dogsJuliaCorrected.concat(dogsKate);
  allDogs.forEach((age, i) => {
    console.log(
      `Dog number ${i + 1} is ${
        age >= 3 ? `an adult, and is ${age} years old.` : `still a puppy.`
      }`
    );
  });
};

checkDogs(dogsJulia, dogsKate);
