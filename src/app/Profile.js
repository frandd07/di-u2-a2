import { getImageUrl } from './utils2.js';

function Avatar({ person, size }) {
  let letra;
  if(size < 90){
    letra = "s"
  }else if(size > 90){
    letra = "b"
  }
  return (
    <img
      className="avatar"
      src={getImageUrl(person,letra)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <Avatar
      size={400}
      person={{ 
        name: 'Gregorio Y. Zara', 
        imageId: '7vQD0fP'
      }}
    />
  );
}
