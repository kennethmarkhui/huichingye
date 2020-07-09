import React from 'react';
import { withStyles } from '@material-ui/styles';
import classNames from 'classnames';

import useActiveAnimation from './hooks/useActiveAnimation';

import AnimatedLetter from './AnimatedLetter';

const styles = ({ palette }) => ({
  word: {
    whiteSpace: 'nowrap',
    display: 'inline-block',
  },
});

const AnimatedWord = ({ classes, word, animateWord, animation, timeout }) => {
  const [activeAnimation, setActiveAnimation] = useActiveAnimation(timeout);

  return (
    <span
      role={'presentation'}
      onMouseEnter={() => animateWord && setActiveAnimation(true)}
      className={classNames(activeAnimation && animation, classes.word)}>
      {animateWord
        ? word
        : word
            .split('')
            .map((letter, index) => (
              <AnimatedLetter
                letter={letter}
                key={index}
                animation={animation}
                animateLetter={!animateWord}
                timeout={timeout}
              />
            ))}
      <span>&nbsp;</span>
    </span>
  );
};

export default withStyles(styles)(AnimatedWord);
