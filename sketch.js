const arrStyles = [
    {
        width: '300px',
        height: '250px',
        top: '100px',
        left: '100px',
        backgroundColor: 'rgb(239, 108, 0)',
        borderRadius: '200px'
    },
    {
        width: '250px',
        height: '80px',
        top: '240px',
        left: '125px',
        backgroundColor: 'rgb(255, 158, 50)',
        borderRadius: '0px 0px 250px 250px'
    },
    {
        top: '200px',
        left: '225px',
        backgroundColor: 'rgb(255, 158, 50)',
        border: 'solid',
        borderTop: '0px solid',
        borderRight: '30px solid rgb(239, 108, 0)',
        borderLeft: '30px solid rgb(239, 108, 0)',
        borderBottom: '30px solid transparent',
    },
    {
        top: '130px',
        left: '150px',
        backgroundColor: 'rgb(255, 158, 50)',
        border: 'solid',
        borderTop: '0px solid',
        borderRight: '30px solid rgb(239, 108, 0)',
        borderLeft: '30px solid rgb(239, 108, 0)',
        borderBottom: '60px solid transparent',
    },
    {
        top: '130px',
        left: '300px',
        backgroundColor: 'rgb(255, 158, 50)',
        border: 'solid',
        borderTop: '0px solid',
        borderRight: '30px solid rgb(239, 108, 0)',
        borderLeft: '30px solid rgb(239, 108, 0)',
        borderBottom: '60px solid transparent',
    },
    {
        width: '30px',
        height: '20px',
        top: '240px',
        left: '150px',
        backgroundColor: 'rgb(239, 108, 0)'
    },
    {
        width: '30px',
        height: '20px',
        top: '240px',
        left: '240px',
        backgroundColor: 'rgb(239, 108, 0)'
    },
    {
        width: '30px',
        height: '20px',
        top: '240px',
        left: '320px',
        backgroundColor: 'rgb(239, 108, 0)'
    },
    {
        width: '30px',
        height: '20px',
        top: '300px',
        left: '180px',
        backgroundColor: 'rgb(239, 108, 0)'
    },
    {
        width: '30px',
        height: '20px',
        top: '300px',
        left: '280px',
        backgroundColor: 'rgb(239, 108, 0)'
    },
    {
        top: '45px',
        left: '225px',
        backgroundColor: 'rgb(63, 39, 35)',
        border: 'solid',
        borderTop: '0px solid',
        borderRight: '30px solid white',
        borderLeft: '30px solid white',
        borderBottom: '60px solid transparent',
    }
];

arrStyles.forEach(elemStyles => {
    createBlock(elemStyles);
});

function createBlock(styles) {
    const block = document.createElement('div');
    block.style.position = 'absolute';

    for (const key in styles) {
        block.style[key] = styles[key];
    }

    document.body.appendChild(block);
}
