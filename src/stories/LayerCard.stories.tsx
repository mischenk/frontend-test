import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import LayerCard from '../components/LayerCard';

export default {
  title: 'Example/LayerCard',
  component: LayerCard,
} as ComponentMeta<typeof LayerCard>;

const Template: ComponentStory<typeof LayerCard> = (args) => <LayerCard {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: 'Flood zone 3',
};
