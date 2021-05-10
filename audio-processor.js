class MyAudioProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
  }

  process(inputList, outputList, parameters) {
    console.log('[MyAudioProcessor] inputList is', inputList);
    console.log('[MyAudioProcessor] outputList is', outputList);
    console.log('[MyAudioProcessor] parameters is', parameters);
    /* using the inputs (or not, as needed), write the output
       into each of the outputs */

    return true;
  }
};

registerProcessor("my-audio-processor", MyAudioProcessor);
