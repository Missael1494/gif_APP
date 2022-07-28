import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';


describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories } /> );

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories } /> );
    });

    
    test('debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('debe de cambiar la caja de texto', () => {

        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate('change', { target: { value } });

        expect( wrapper.find('p').text().trim() ).toBe( value );
        
    })

    test('NO debe de postear la información con submit', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();

    } )

    test('debe de llamar el setCAtegories y limpiar la caja de texto', () => {

    const value = 'one punch';
    wrapper.find('input').simulate('change', { target: {value}})

    wrapper.find('form').simulate('submit', { preventDefault(){}});

    const input = wrapper.find('input').prop('value')

    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(input).toBe('')

    });
    

})