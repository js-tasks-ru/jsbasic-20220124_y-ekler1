
function sumSalary(salaries) {
  let sum = 0;

  for (let key in salaries) {
    let salary = typeof (salaries[key]) === 'number' && Number.isFinite(salaries[key]);

    if (salary) {
      sum += salaries[key];
    }
  }

  return sum;
}
