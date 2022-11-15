import { render, screen } from '@testing-library/react';
import App from './App';
import axios from "axios";
import { mockAxiosGet, mockAxiosPost } from "./mocks/mockAxios";
import userEvent from '@testing-library/user-event'; 


beforeEach(() => {
  jest.spyOn(axios, "get").mockImplementation(mockAxiosGet);
  jest.spyOn(axios, "post").mockImplementation(mockAxiosPost);
});

afterEach(() => {
  jest.restoreAllMocks();
})


test('render the product list page', async () => {
  
  render(<App />);

  // Check that some of the product items exist
  expect(await screen.findByText(/Iconia Talk S/i)).toBeInTheDocument();
  expect(await screen.findByText(/Acer Iconia Tab 10 A3-A40/i)).toBeInTheDocument();

  // Check that the search bar exists
  const linkElement = screen.getByText(/Buscar/i);
  expect(linkElement).toBeInTheDocument();

});



test('search products on the search bar', async () => {
  
  render(<App />);

  // Wait for products to load.
  expect(await screen.findByText(/Iconia Talk S/i)).toBeInTheDocument();

  // Select search input and type text
  const searchInput = screen.getByRole("textbox", {name: /searchInput/i});
  await userEvent.type(searchInput, "Iconia");

  // Check there that the two results exist
  expect(await screen.findAllByText(/Acer Iconia Talk S/i)).toHaveLength(1);
  expect(await screen.findAllByText(/Acer Iconia Tab 10 A3-A40/i)).toHaveLength(1);

  // Check it's the only two results.
  const images = await screen.findAllByRole("img", { name: "productImage" });
  expect(images).toHaveLength(2);


});



test('navigate to product and add to cart', async () => {

  const wrapper = render(<App />);

  // Wait for products to load.
  expect(await screen.findByText(/Iconia Talk S/i)).toBeInTheDocument();

  const user = userEvent.setup();

  const productImg = await screen.findByText(/Iconia Talk S/i);
  await user.click(productImg);

  // Check the product page loads by checking different elements.
  expect(await screen.findByText(/Especificaciones/i)).toBeInTheDocument();
  const addToCartButton = await screen.findByText(/Añadir al carrito/i);
  expect(addToCartButton).toBeInTheDocument();
  expect(await screen.findByText(/170.00 €/i)).toBeInTheDocument();

  // Check cart amount is 0
  const cartButton = await wrapper.findByText("Carrito")
  expect(cartButton.children[0].textContent).toBe("0");

  // Add product to cart
  await user.click(await screen.findByText("16 GB"));
  await user.click(await screen.findByText("Black"));

  // Check button status is now enabled
  expect(addToCartButton).not.toBeDisabled();

  // Press add to cart button
  await user.click(addToCartButton);

  // Check cart size is 1
  expect(cartButton.children[0].textContent).toBe("1");

});