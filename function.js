document.getElementById('btn').addEventListener("click", (event) => {
    event.preventDefault();

    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;
    const sex = document.getElementById('gender');
    const ethnicity = document.getElementById('ethnicity').value;
    const religion = document.getElementById('religion').value;

    let gender = "";
    if (sex.value.toLowerCase() === 'male') {
        gender = "Mr";
    } else if (sex.value.toLowerCase() === 'female') {
        gender = "Ms";
    }

    const age = document.getElementById('age').value;
    const job = document.getElementById('occupation').value;

    console.log(`Hi ${gender} ${firstName} ${lastName}, you are ${age} years old and your occupation is ${job}. Your ethnicty is ${ethnicity} and your religion is ${religion}.`);
});