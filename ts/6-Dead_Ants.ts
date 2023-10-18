// https://www.codewars.com/kata/57d5e850bfcdc545870000b7/train/typescript

// An orderly trail of ants is marching across the park picnic area.

// It looks something like this:

// ..ant..ant.ant...ant.ant..ant.ant....ant..ant.ant.ant...ant..
// But suddenly there is a rumour that a dropped chicken sandwich has been spotted on the ground ahead. The ants surge forward! Oh No, it's an ant stampede!!

// Some of the slower ants are trampled, and their poor little ant bodies are broken up into scattered bits.

// The resulting carnage looks like this:

// ...ant...ant..nat.ant.t..ant...ant..ant..ant.anant..t
// Can you find how many ants have died?

export function deadAntCount (ants:string | null) : number {
  console.log( ants, ants?.replace(/ant/gi, '').split('').filter((a) => a='a').length || 0)
  let noLiveAnts: string[] = ants?.replace(/ant/gi, '').trim().split('') || []
  return Math.max(noLiveAnts.filter((a) => a==='a').length,noLiveAnts.filter((a) => a==='n').length,noLiveAnts.filter((a) => a==='t').length) || 0
}