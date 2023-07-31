import { render, screen } from '@testing-library/react';
import React from "react"
import "@testing-library/jest-dom";  // optional (other assertive functions : toHaveClass...)
import userEvent from "@testing-library/user-event";
import { act } from 'react-dom/test-utils'; // recreate user interactions
import App from '../App';
import { BrowserRouter } from "react-router-dom";

describe('Test the App component', () => {
    it('renders the Header component', () => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        )
        const headerComponent = screen.getByTestId('header-component')
        expect(headerComponent).toBeInTheDocument()
    })

    it('renders the Cart component if cart button is clicked', async () => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        )
        const user = userEvent.setup()
        const openCartButton = screen.getByTestId("cart-open")
        const getCartComponent = () => screen.queryByTestId('cart-component')

        expect(getCartComponent()).toBeNull()

        await user.click(openCartButton)

        expect(getCartComponent()).toBeInTheDocument()
    })

    it('closes the Cart component if cart close button is clicked', async () => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        )
        const user = userEvent.setup()
        const openCartButton = screen.getByTestId("cart-open")
        const getCartComponent = () => screen.queryByTestId('cart-component')

        await user.click(openCartButton)

        const closeButton = screen.getByTestId('cart-close')

        expect(getCartComponent()).toBeInTheDocument()

        await user.click(closeButton)

        expect(getCartComponent()).toBeNull()
    })
})