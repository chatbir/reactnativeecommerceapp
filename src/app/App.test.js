import React from 'react';
import renderer from 'react-test-renderer';

// Mock Animated Icon
jest.mock('@/components/animated-icon', () => ({
  AnimatedIcon: () => null,
  AnimatedSplashOverlay: () => null,
}));

// Mock Worklets
jest.mock('react-native-worklets', () => ({
  scheduleOnRN: jest.fn(),
}));

// Mock Expo Image
jest.mock('expo-image', () => ({
  Image: 'Image',
}));

// Mock Expo Device
jest.mock('expo-device', () => ({
  isDevice: false,
}));

import HomeScreen from './index';

describe('<HomeScreen />', () => {
  it('renders correctly', () => {
    const component = renderer.create(<HomeScreen />);

    expect(component).toBeDefined();
  });
});