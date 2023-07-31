import { render, screen } from '@testing-library/react';
import React from "react"
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Cart from '../components/Cart';

describe('Test the Cart component', () => {
    it('renders the Cart component', () => {
        render(
                <Cart increment={jest.fn()} decrement={jest.fn()} closeCart={jest.fn()} cartItems={[]} />
        )
        const cartComponent = screen.getByTestId('cart-component')
        expect(cartComponent).toBeInTheDocument()
    })

    it('renders No item in your cart yet message if no item in cart', () => {
        render(
                <Cart increment={jest.fn()} decrement={jest.fn()} closeCart={jest.fn()} cartItems={[]} />
        )
        const noItemMessage = screen.getByText(/No item in your cart yet/i)
        expect(noItemMessage).toBeInTheDocument()
    })

    it('renders cart item and its infos correctly', () => {
        const item = {id: 1, name: "test", price: 10, quantity: 1, imgSrc: "test"}
        render(
                <Cart increment={jest.fn()} decrement={jest.fn()} closeCart={jest.fn()} cartItems={[item]} />
        )
        const cartItem = screen.getByTestId('cart-product')
        expect(cartItem).toBeInTheDocument()
        expect(cartItem).toHaveTextContent(item.name)
        expect(cartItem).toHaveTextContent(item.price)
        expect(screen.getByTestId("cart-product-quantity")).toHaveTextContent(item.quantity)
        expect(screen.getByTestId('cart--product-image')).toBeInTheDocument()
        expect(screen.getByTestId('cart--product-image')).toHaveAttribute('src', item.imgSrc)
        expect(screen.getByTestId("increment")).toBeInTheDocument()
        expect(screen.getByTestId("decrement")).toBeInTheDocument()
    })

    it('renders cart total correctly', () => {
        const items = [
            {id: 1, name: "test", price: 10, quantity: 1, imgSrc: "test"},
            {id: 2, name: "test2", price: 20, quantity: 2, imgSrc: "test2"},
            {id: 3, name: "test3", price: 30, quantity: 1, imgSrc: "test3"}
        ]
        render(
                <Cart increment={jest.fn()} decrement={jest.fn()} closeCart={jest.fn()} cartItems={items} />
        )

        const cartTotal = screen.getByTestId('cart-total')
        expect(cartTotal).toBeInTheDocument()
        expect(cartTotal).toHaveTextContent("80$")
    })

    it('renders the checkout button', () => {
        render(
                <Cart increment={jest.fn()} decrement={jest.fn()} closeCart={jest.fn()} cartItems={[]} />
        )
        const checkoutButton = screen.getByText(/checkout/i)
        expect(checkoutButton).toBeInTheDocument()
    })

    it('renders the close button', () => {
        render(
                <Cart increment={jest.fn()} decrement={jest.fn()} closeCart={jest.fn()} cartItems={[]} />
        )
        const closeButton = screen.getByTestId('cart-close')
        expect(closeButton).toBeInTheDocument()
    })

    it('calls closeCart function when close button is clicked', async () => {
        const closeCart = jest.fn()
        const user = userEvent.setup()
        render(
            <Cart increment={jest.fn()} decrement={jest.fn()} closeCart={closeCart} cartItems={[]} />
        )

        await user.click(screen.getByTestId('cart-close'))

        expect(closeCart).toHaveBeenCalledTimes(1)
    })

    it('calls increment function when + button is clicked', async () => {
        const item = {id: 1, name: "test", price: 10, quantity: 1, imgSrc: "test"}
        const increment = jest.fn()
        const user = userEvent.setup()
        render(
            <Cart increment={increment} decrement={jest.fn()} closeCart={jest.fn()} cartItems={[item]} />
        )

        await user.click(screen.getByTestId("increment"))

        expect(increment).toHaveBeenCalledTimes(1)
    })

    it('calls decrement function when - button is clicked', async () => {
        const item = {id: 1, name: "test", price: 10, quantity: 1, imgSrc: "test"}
        const decrement = jest.fn()
        const user = userEvent.setup()
        render(
            <Cart increment={jest.fn()} decrement={decrement} closeCart={jest.fn()} cartItems={[item]} />
        )

        await user.click(screen.getByTestId("decrement"))

        expect(decrement).toHaveBeenCalledTimes(1)
    })

    it('calls increment function with correct item id when + button is clicked', async () => {
        const item = {id: 1, name: "test", price: 10, quantity: 1, imgSrc: "test"}
        const increment = jest.fn()
        const user = userEvent.setup()
        render(
            <Cart increment={increment} decrement={jest.fn()} closeCart={jest.fn()} cartItems={[item]} />
        )

        await user.click(screen.getByTestId("increment"))

        expect(increment).toHaveBeenCalledWith(item.id)
    })

    it('calls decrement function with correct item id when - button is clicked', async () => {      
        const item = {id: 1, name: "test", price: 10, quantity: 1, imgSrc: "test"}
        const decrement = jest.fn()
        const user = userEvent.setup()
        render(
            <Cart increment={jest.fn()} decrement={decrement} closeCart={jest.fn()} cartItems={[item]} />
        )

        await user.click(screen.getByTestId("decrement"))

        expect(decrement).toHaveBeenCalledWith(item.id)
    })
})
