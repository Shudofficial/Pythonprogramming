function ask  (Question, yes, No) {
    if (Confirm(Question)) yes();
    else No();
}
ask('Do you agree?', () => alert('You agreed'), () => alert('You canceled the execution'));