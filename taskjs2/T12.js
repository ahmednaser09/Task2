let month = 'january';  

switch (month) {
    case 'december':
    case 'january':
    case 'february':
        document.write(`${month} is a winter month`);
        break;
    case 'march':
    case 'april':
    case 'may':
        document.write(`${month} is a spring month`);
        break;
    case 'june':
    case 'july':
    case 'august':
        document.write(`${month} is a summer month`);
        break;
    case 'september':
    case 'october':
    case 'november':
        document.write(`${month} is an autumn month`);
        break;
    default:
        document.write("Invalid month");
}


