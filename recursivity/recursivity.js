function boucleRecursivity(i) {
    if (i === 4) {
        return;
    }

    console.log(i);
    boucleRecursivity(i + 1);
}

boucleRecursivity(1);

const couleurs = ["rouge", "vert", "jaune", "vert"];

function boucleIterativeArr(i, array) {

 if ( i === array.length) {
     return
    }

    console.log(array[i]);
    boucleIterativeArr(i + 1, couleurs);
}

boucleIterativeArr(0, couleurs);

const familyTree = {
    icon: "👵",
    children: [
        {
            icon: "👨",
            children: [],
        },
        {
            icon: "👩‍🦰",
            children: [{ icon: "🧒" }, { icon: "👶" }],
        },
    ],
};

function boucleIterativeArrObject(array) {
    console.log(`${array.icon} a ${array.children.length} enfants`);

    if (array.children === undefined) {
        return;
    }

    for (const child of array.children)  {
        boucleIterativeArrObject(child);
    }

    boucleIterativeArrObject(i + 1, familyTree);
}

boucleIterativeArrObject(0, familyTree);

const traverseTree = (person) => {
    if (person.children === undefined) {
        return;
    }
    console.log(`${person.label} a ${person.children.length} enfants`);
    for (const child of person.children) {
        traverseTree(child);
    }
};
traverseTree(familyTree);