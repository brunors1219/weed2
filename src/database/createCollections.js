import connectToDatabase from './index.js';
import Guest from './schemas/Guest.js';
import Pagamentos from './schemas/Pagamentos.js';
import Product from './schemas/Product.js';
import Setup from './schemas/Setup.js';
import Photo from './schemas/Photo.js';

async function createCollections() {
  await connectToDatabase();

  // Inserindo documentos de exemplo para criar coleções
  await Guest.create({
    owner: 'exampleOwner',
    name: 'exampleGuest',
    referency: 'exampleReference',
    email: 'example@example.com',
    age: 30,
    phone: '123456789',
    confirmed: true,
    dueDate: new Date(),
    escorts: [{ name: 'exampleEscort', age: 25, confirmed: true, present: true }]
  });

  await Pagamentos.create({
    guest: 'exampleGuest',
    guest_name: 'exampleGuestName',
    product_name: 'exampleProduct',
    product_url: 'http://example.com',
    request_id: '12345',
    request_Status: 'pending',
    request_url_buy: 'http://example.com/buy',
    excluded: false
  });

  await Product.create({
    category: 'exampleCategory',
    name: 'exampleProduct',
    value: 100,
    url: 'http://example.com',
    date: new Date()
  });

  await Setup.create({
    showCamera: true
  });

  await Photo.create({
    url: 'http://example.com/photo.jpg',
    owner: 'exampleOwner',
    guest_name: 'exampleGuest',
    date: new Date(),
    download_date: new Date()
  });

  console.log('Collections created successfully');
}

createCollections().catch(err => console.log(err));
