import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import * as AllIcons from '../index';

const iconList = Object.entries(AllIcons).filter(([name]) => name.startsWith('Icon'));

const IconsGrid = (args: any) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '20px', padding: '20px' }}>
      {iconList.map(([name, IconComponent]) => {
         // @ts-ignore
         const Component = IconComponent;
         return (
        <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '10px', border: '1px solid #eee', borderRadius: '8px' }}>
          <Component {...args} />
          <span style={{ marginTop: '8px', fontSize: '12px', wordBreak: 'break-word' }}>{name}</span>
        </div>
      )})}
    </div>
  );
};

const meta: Meta = {
  title: 'Library/All Icons',
  component: IconsGrid,
  argTypes: {
    size: { 
        control: { type: 'select'}, 
        options: ['xs', 'sm', 'md', 'lg', 'xl', 'none']
    },
    state: { 
        control: { type: 'select'}, 
        options: ['default', 'primary', 'info', 'warning', 'error', 'inverse', 'complementary', 'disabled', 'none']
    }
  }
};

export default meta;
type Story = StoryObj<typeof IconsGrid>;

export const Gallery: Story = {
    args: {
        size: 'md',
        state: 'default'
    }
};
