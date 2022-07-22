import React from 'react';
import { IsoLogotipo } from './isoLogotipo';


export default {
    title: 'Universo3d/Order/IsoLogotype',
    component: IsoLogotipo,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
        color: { control: 'color' },
        fontSize: {
            options: ['small', 'medium', 'large'],
            control: { type: 'select' },
        },
        size: {

            control: { type: 'range', min: 0, max: 500 },
        },

    }
}
export const isologotype = (args) => <IsoLogotipo {...args} />



isologotype.storyName = 'IsoLogotype'