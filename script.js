window.onload = () => {
    document.querySelector('#btn').addEventListener('click', () => {
        document.querySelector('#domain').innerHTML = domainGenerator();
    });

}

let domainGenerator = () => {

    let pronoun = ['the', 'a'];
    let adj = ['crazy', 'big', 'old', 'wild'];
    let noun = ['jogger', 'racoon', 'lion', 'trucker'];
    let finish = ['.com', '.net', '.us'];

    let pronoun1 = Math.floor((Math.random() * pronoun.length));
    let adjective2 = Math.floor((Math.random() * adj.length));
    let noun3 = Math.floor((Math.random() * noun.length));
    let finish4 = Math.floor((Math.random() * finish.length));

    return pronoun[pronoun1] + adj[adjective2] + noun[noun3] + finish[finish4];
};

//   return `${pronoun[pronoun1]}
//     ${adj[adjective2]}
//     ${noun[noun3]}
//     ${finish[finish4]}`