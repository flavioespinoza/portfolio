function handleError(errorMessage) {
  return {
    success: false,
    author: null,
    preferredName: null,
    quote: errorMessage,
    title: null,
    website: null,
    email: null,
    linkedin: null,
  }
}

function fullName(author) {
  return `${author.firstName} ${author.middleName ? author.middleName : ''} ${author.lastName}`
}

export default function quotes(author) {
  if (!author || !author.firstName || !author.lastName) {
    let errorMessage = 'The first argument must be an Object: { firstName: String, middleName: String (optional), lastName: String }'
    return handleError(errorMessage)
  }
  let notFound = `An author with the name "${fullName(author)}" was not found.`
  // kevin
  if (author.firstName.toLowerCase() === 'kevin') {
    if (author.lastName.toLowerCase() === 'burke') {
      return {
        success: true,
        author: 'Kevin Burke, AIA',
        preferredName: 'Kevin',
        text: `Flavio is a rare combination of talent and commitment with an intuitive understanding of 
                graphic visual communication and a propensity for creative problem-solving. Flavio considers the broad 
                ramifications of a concept even while he is designing the smallest detail.`,
        title: 'Principle',
        company: 'Parabola Architecture',
        website: 'https://parabola-architecture.com/',
        email: 'kevin@parabola-architecture.com',
        linkedin: 'https://www.linkedin.com/in/kevintburke',
      }
    }
    return handleError(notFound)
  }
  // matthew
  if (author.firstName.toLowerCase() === 'matthew') {
    if (author.lastName.toLowerCase() === 'sanders') {
      return {
        success: true,
        author: 'Matthew Sanders',
        preferredName: 'Sandman',
        text: `Flavio is a great friend and very intelligent software engineer. His UX and design skills are very 
               impressive and unique. He is very good at learning new things and getting it implemented. He definitely has the “chops” 
               when it comes to extreme ownership over a project and will work on it to achieve perfection.`,
        company: 'Lead Engineer at Bonneville Communications',
        website: 'http://mattsanders.org',
        email: 'msanders45@gmail.com',
        linkedin: 'https://www.linkedin.com/in/matthew-sanders-13001a78',
      }
    }
    return handleError(notFound)
  }
  // julio
  if (author.firstName.toLowerCase() === 'julio') {
    if (author.lastName.toLowerCase() === 'morales') {
      return {
        success: true,
        author: 'Julio Morales',
        preferredName: 'Julio',
        text: `Flavio I want you to know how much I respect you and your commitment to dance. I'm proud of you man. You're looking good man!`,
        company: `World Champion, Salsa On2 Men's Pro Solo Division – 2021 World Latin Dance Cup`,
        website: 'https://www.facebook.com/juliomorales.scooby',
        email: null,
        linkedin: 'https://www.facebook.com/juliomorales.scooby',
      }
    }
    return handleError(notFound)
  }

  return handleError(notFound)
}
