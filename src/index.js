import { HttpClient } from './http-client';
import './styles.css';

let http = new HttpClient();

http.get('https://httpstat.us/401').then(data => console.log(data));

document.getElementById('app').innerHTML = `
<h1>Hello Design Pattern!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
