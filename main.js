let studentNameInput = document.getElementById("studentName");
//let randomHouse = '4';

const printToDom = (stringToPrint, whereToPrint) => {
    document.getElementById(whereToPrint).innerHTML = stringToPrint;
}

const submitGetStartedElem = document.getElementById("submitGetStarted");

// const activateCardCreationAbility = () => {
//     const studentCreationButtons = document.getElementsByClassName('studentCreationButton'); //why do we not have to put in btn btn-primary deleteButton
//     for (let i=0;i<studentCreationButtons.length;i++){                               //why are we making functions inside these event listeners
//         const element = studentCreationButtons[i];
//         element.addEventListener("click", (e) => {
//             //card that the button was on
//             const buttonIClicked = e.target;
//             const cardToDelete = buttonIClicked.parentNode.parentNode;
//             cardToDelete.remove();
//         })
//     }
// }

const buildNewStudentCreationForm = () => {
    let domString = `<div class="d-flex justify-content-center border border-dark">
    <form class="form-inline m-3 p-3">
            <div class="d-flex flex-column">
                <h3>Enter First Year's Name</h3>
                <div class="d-flex flex-row">
                <div class="form-group mb-2">
              <label for="staticEmail2" class="sr-only">Email</label>
              <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="Student:">
            </div>
            <div class="form-group mx-sm-3 mb-2">
              <label for="studentName" class="sr-only">studentName</label>
              <input type="text" class="form-control" id="studentName" placeholder="Seamus Finnegan">
            </div>
            <button type="button" class="btn btn-secondary text-dark bg-light mb-2 mx-sm-5 studentCreationButton" id="submitButtonId">Sort!</button>
        </div>    
        </div>
        </form>
        </div>`;
    
        printToDom(domString, 'studentCreation');
    }
    const activateDeletes = () => {
        const deleteButtons = document.getElementsByClassName('deleteButton'); //why do we not have to put in btn btn-primary deleteButton
        for (let i=0;i<deleteButtons.length;i++){                               //why are we making functions inside these event listeners
            const element = deleteButtons[i];
            element.addEventListener("click", (e) => {
                //card that the button was on
                const buttonIClicked = e.target;
                const cardToDelete = buttonIClicked.parentNode.parentNode;
                cardToDelete.remove();
            })
        }
    }
    const buildSortedStudent = (name) => {
        let domString = `<div class="card w-25 m-2" style="width: 18rem;">
        <div class="card-body">
          <h3 class="card-title">${name}</h3>
          <button href="#" class="btn btn-danger deleteButton">Delete this</button>
        </div>
        </div>`;
        
            printToDom(domString, 'studentCard');
            activateDeletes();
        }

    submitGetStartedElem.addEventListener("click", (e) => {
        e.preventDefault();//prevents chrome from erasing our console logs
    
        buildNewStudentCreationForm();
    });


    document.getElementById('studentCreation').addEventListener('click', function() {
        if(event.target.id === 'submitButtonId') {
        buildSortedStudent(studentNameInput.value)
        
        }
    })