# improvise-partner
improvise partner based on audio input using stochastic methods

 For this project I wanted to design a tool which act interactively in performance - an improvise partner. I used markov chains, random walker and crossover algorithms in terms of stochastic techniques. 
 
 It’s recommended to use monitors for output and microphone for input, using the laptop’s speaker for input and output at the same time might cause painful feedback. Press the microphone button/speaker button and it will start running, press the ‘reload’ box if the visual background is not grey or it’s not running.
 
  The logic is to press the start button and the tool will start running and changing itself, I used preset and 1st order markov chains to achieve this that it could switch between 5 different states and trigger new probability iterations.
  
  In order to make it sound relative and interactive enough, I decided to use live sampling techniques so it could provide a communicative feeling depends on my input, so when playing with it, the output would sound more like a duo. To achieve this, I used edge~ that when the signal transition is detected, the object will trigger new effects based on the ‘random’ parameter. I also used groove~, wave~ and different playback speed so it will sound more unpredictable.  To change the parameter each time, I mapped the random walker’s output and the 3rd markov chains output to 0. to 127. as well as adding two stochastic number outputs together.
  
  I also made a kick and snare drum triggered by the crossover algorithm, so the improvise partner has it’s own vocabulary. The rhythm is triggered by the crossover algorithm and the parent and genotype selection depends on the output of the 1st markov chains.
  
  I did the random walker as well as the visualisation in p5.js, which when the preset output a number between 1-5, it starts a random walker in different colour accordingly.
  
  <img width="757" alt="diagram" src="https://user-images.githubusercontent.com/118258469/212566667-2a30f732-705d-4a15-afab-c18af16b8b5e.png">

reference: https://www.youtube.com/watch?v=bqF9w9TTfeo
