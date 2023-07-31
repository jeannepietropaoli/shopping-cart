import { render, screen } from '@testing-library/react';
import React from "react"
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Shop from '../components/Shop';
import productsData from '../productsData';

describe('Test the Shop component', () => {
    it('renders the Shop component', () => {
        render(<Shop />)
        const shopComponent = screen.getByTestId('shop-component')
        expect(shopComponent).toBeInTheDocument()
    })

    it('renders the Sidebar component', () => {
        render(<Shop />)
        const sidebarComponent = screen.getByTestId('sidebar-component')
        expect(sidebarComponent).toBeInTheDocument()
    })

    it('renders the ProductCard component for each product of the selected category', () => {
        render(<Shop />)
        const productCards = screen.getAllByTestId('product-card')
        expect(productCards.length).toBe(5)
        productCards.forEach(productCard => {
            expect(productCard).toBeInTheDocument()
        })
    })

    /* it('calls the addToCart function with the correct args when + button on an item is clicked', () => {
        const addToCart = jest.fn()
        render(<Shop addToCart={addToCart} />)
        const addItemButtons = screen.getAllByTestId('add-item-button')
        userEvent.click(addItemButtons[0])
        expect(addToCart).toHaveBeenCalledWith(1)
    }) */

    /* it('add item to the cart when + button on an item is clicked', async () => {
        render(
            <Shop />
        )
    
        const user = userEvent.setup()
    
        user.click(screen.getByTestId('shop-button'))
    
        const addItemButtons = screen.getAllByTestId('add-item-button')
    
        const getCartItems = screen.queryAllByTestId('cart-product')
    
        expect(getCartItems.length).toBe(0)
        
        await user.click(addItemButtons[0])
    
    
    }) */
})
