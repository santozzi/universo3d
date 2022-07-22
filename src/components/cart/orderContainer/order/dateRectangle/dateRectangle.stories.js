import React from 'react';
import { DateRectangle } from './dateRectangle';


export default {
    title: 'Universo3d/Order/DateRectangle',
    component: DateRectangle,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
        color: { control: 'color' },
        fontSize: {
            options: ['20', '50', '100'],
            control: { type: 'range' },
        },
        square: { control: 'boolean' },


    },
};
export const rectangle = (args) => <DateRectangle {...args} />



rectangle.storyName = 'Date Rectangle'