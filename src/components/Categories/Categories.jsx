import React from 'react';
import { categories } from './categoriesData';
import Container from '../Shared/Container';
import CategoriesBox from './CategoriesBox';

const Categories = () => {
    return (
        <Container>
            <div className='flex flex-row items-center justify-between overflow-x-auto pt-4'>
                {
                    categories.map(item => <CategoriesBox
                        label={item.label}
                        icon={item.icon}
                        key={item.label}
                    />)
                }
            </div>
        </Container>
    );
};

export default Categories;