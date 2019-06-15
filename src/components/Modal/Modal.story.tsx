import '../../styles/global.scss';
import React, { useState, ReactElement } from 'react';
import { storiesOf } from '@storybook/react';
import Modal from '.';
import TriggeredModal from '../TriggeredModal';
import Button from '../Button';

const f = () => {}


storiesOf('Modal', module)
    .add("With text", () => <Modal onClose={f} okAction={f}>
                            <div>
                                <p>The quick brown fox jumped over the lazy dog.</p>
                            </div>
                        </Modal>)
    .add("Triggered", () => <TriggeredModal trigger={<Button>I open a modal!</Button>}>
                                The quick brown fox jumped over the lazy dog.
                            </TriggeredModal>)