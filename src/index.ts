
import { NumbersCollection  } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
const charactersCollection = new CharactersCollection('XaasbM');
charactersCollection.sort();
const linkedList = new LinkedList();
linkedList.add(100);
linkedList.add(3);
linkedList.add(-5);
linkedList.add(0);


linkedList.sort();
console.log(numbersCollection.data);
console.log(charactersCollection.data);
linkedList.print();