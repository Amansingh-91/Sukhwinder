let language = prompt(`press 1 for english\npress 2 for hindi`);
switch(Number(language)){
    case 1:
        alert("english selected");
        let nextOption = prompt(`press 1 for balance\npress 2 for data \npress 3 for customer Care `);
        switch (Number(nextOption)) {
            case 1:
                alert("your balance is rs 50.")
                break;
            case 2:
                    alert("your balance is 50 MB.")
                    break;        
            default:
                alert("Wrong choice");
                break;
        }
        break;
    case 2:
        alert("hindi selected");
        nextOption = prompt(`press 1 for balance\npress 2 for data \npress 3 for customer Care `);
        switch (Number(nextOption)) {
            case 1:
                alert("your balance is rs 50.")
                break;
            case 2:
                    alert("your balance is 50 MB.")
                    break;        
            default:
                alert("Wrong choice");
                break;
        }
        break;
    default:
            alert("Wrong choice");
            break;
}