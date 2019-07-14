#! /usr/bin/env node

const program = require('commander');
const pluralize = require('pluralize');

program
  .version('0.0.1')
  .description('A 10x shit post generator')
  .usage('<a noun> [a verb] [options]')
  .option('-s, --sarcasm <type>', 'Set the level of sarcasm', 0);

program.on('--help', function() {
  console.log('');
  console.log('Examples:');
  console.log('  $ 10xgen Engineer');
  console.log('  $ 10xgen Engineer code');
  console.log('  $ 10xgen Devloper code');
  console.log('  $ 10xgen Cat sleep -s 1');
});

program.parse(process.argv);
const xArg = program.args[0];

const colors = {
  yellow: str => `\x1b[33m${str}\x1b[0m`,
  red: str => `\x1b[31m${str}\x1b[0m`,
  blue: str => `\x1b[34m${str}\x1b[0m`,
  green: str => `\x1b[32m${str}\x1b[0m`
};

const shitPostContent = (noun, verb) => ({
    0: [
        `10x ${pluralize(noun)}\n\nFounders if you ever come across this rare breed of ${pluralize(noun)}, grab them. If you have a 10x ${noun} as part of your first few ${pluralize(noun)}, you increase the odds of your startup success significantly.\n\nOK, here is a tough question.\n\nHow do you spot a 10x ${noun}?`,
        `1. 10x ${pluralize(noun)} hate meetings. They think it is a waste of time and obvious things are being discussed. They attend meetings because the manager has called for a 'Staff meeting' to discuss the features and status.`,
        `2. Timings in the office for 10x ${pluralize(noun)} is highly irregular. They tend to work when very few folks are around. If there is a crowd or all-hands meeting, they are not visible. Most of them are late-nighters and come late to the office.`,
        `3. 10x ${pluralize(noun)} laptop screen background color is typically black (they always change defaults). Their keyboard keys such as i, f, x are usually worn out than of a, s, and e (email senders).`,
        `4. 10x ${pluralize(noun)} know every line of the ${verb} that has gone into production. If a QA or support folks alert an issue, they know precisely where the fault (or bug) is and can fix the same in hours vs days`,
        `5. Most of the 10x ${pluralize(noun)} are full-stack ${pluralize(noun)}. For them ${verb} is ${verb}, they don't care whether it is front-end, back-end, API, database, serverless, etc. I have rarely seen them doing UI work.`,
        `6. 10x ${pluralize(noun)} can convert 'thought' into '${verb}' in their mind and write it in an iterative fashion. Given a product feature, they can write that entire feature in one or two sittings of 4 to 6 hours with a caffeinated drink without distraction.`,
        `7. 10x ${pluralize(noun)} rarely look at help documentation of classes or methods. They know it in memory and can recall from memory. They write ${verb} at the same ease as writing English. No breaks, no pause, just type.`,
        `8. 10x ${pluralize(noun)} are always learning new frameworks, languages ahead of everyone in the company. They are not afraid of anything new. If there is something new (e.g. blockchain) they gobble up, setup, experiment before anyone is getting started.`,
        `9. 10x ${pluralize(noun)} are poor mentors as they can't teach others on what to do OR parcel the work. They always think 'It takes too long to teach or discuss with others, I would rather do it myself.' They are also poor interviewers.`,
        `10. 10x ${pluralize(noun)} don't hack things. They write quality ${verb} and know exactly how the ${verb} has to evolve, and have a mental model of overall ${verb} structure. They write at most one design document, and the rest is in the ${verb}.`,
        `11. 10x ${pluralize(noun)} rarely job hunt or move out of the company. They move out because you make their life miserable with the process, meetings, training, and other non-value-added activities. If you come across them, hold on to them. Celebrate them.`,
    ],
    1: [
        `10x ${pluralize(noun)}\n\nFounders if you ever come across this rare breed of ${pluralize(noun)}, grab them. If you have a 10x ${noun} as part of your first few ${pluralize(noun)}, you increase the odds of your success significantly.\n\nOK, here is a tough question.\n\nHow do you spot a 10x ${noun}?`,
        `1. 10x ${pluralize(noun)} hate people. They think it is a waste of time talking to people as they can read everyone's thought before they even think of it. They attend meetings only because the manager has called for a 'Staff meeting' to discuss the features and status.`,
        `2. Timings in the office for 10x ${pluralize(noun)} is highly irregular. They come to office only for their caffeine. They have completed all the work that will ever be needed before anyone thought of the requirements. Most of them breath out ${verb}.`,
        `3. 10x ${pluralize(noun)} laptop screen background color is typically invisible (yes a mere mortal cannot see the color). Their keyboard keys are non existent as they usually write ${verb} with thoughts and not hands.`,
        `4. 10x ${pluralize(noun)} know every line of the ${verb} that will be written before it is ever written. If a QA or support folks alert an issue, well that never happens as everyone knows a 10x ${noun} never creates bug.`,
        `5. Most of the 10x ${pluralize(noun)} are full-stack ${pluralize(noun)}. For them ${verb} is ${verb}, they don't care whether it is front-end, back-end, API, database, serverless, cloudless, codeless etc. I have rarely seen them doing any work as they have done all the work ever needed for eternity already.`,
        `6. 10x ${pluralize(noun)} can convert 'thought' into '${verb}' in their mind and upload it into a running application without even having to restart it just using thoughts. Given a product feature, they look at you in disgust as they have written that feature already reading your feeble mind and continue enjoying a caffeinated drink without distraction.`,
        `7. 10x ${pluralize(noun)} rarely look at help documentation of classes or methods as they ${verb} only in assembly and machine languages. They know it in memory and can recall from memory. They write ${verb} at the same ease as taking a nap. No breaks, no pause, just sleep.`,
        `8. 10x ${pluralize(noun)} are always learning new frameworks, languages before they are invented and discard them as they are inferior before them. They are not afraid of anything new as they know that they never need it. If there is something new (e.g. blockchain) they laugh at it and shake their head 10 times.`,
        `9. 10x ${pluralize(noun)} are poor mentors as they can't teach others who could never comprehend what a 10x ${noun} thinks. They always think '$$^%!W%$!T!T*&%!&&', as I said we cannot comprehend this. They are also poor interviewers as they can see through your bullshit.`,
        `10. 10x ${pluralize(noun)} don't hack things. They write ${verb} that is beyond what we can comprehend and understand and know exactly how the ${verb} has to evolve, and have a mental model of overall ${verb} structure. They write at most one design document, and the rest is in the ${verb}.`,
        `11. 10x ${pluralize(noun)} rarely job hunt or move out of the company. They move out because there is nothing more to be done here, they have done everything required for eternity. If you come across them, hold on to them. Celebrate them. Bow to them. Don't make eye contact.`,
    ],
});

if (xArg) {
  console.log(colors.yellow(`Preparing your 10x ${xArg} shit post.`));
  console.log(colors.yellow(`  - sarcasm level is ${program.sarcasm}\n`));

  const posts = shitPostContent(xArg, program.args[1] || 'code')[program.sarcasm];

  console.log(colors.blue(`---\n`));
  posts.forEach(post => {
    console.log(colors.green(`${post}\n`));
    console.log(colors.blue(`---\n`));
  });
} else {
  console.log(
    colors.red(
      `Missing argument to generate post. Try '10xgen <a noun like Engineer> [work they do like code]'`
    )
  );
}
