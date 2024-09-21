function main(){
    let finder = location.search.substring(1);
    finder = finder.split("=")[1];
    finder = swapWhiteSpace(finder);
    f = searchvals(finder);
}


function swapWhiteSpace(str){
    temp = ""
    for (x = 0; x <str.length; x++){
        if (str[x] == '+'){
            temp += ' '
        } else {
            temp += str[x]
        }
    }

    return temp
}
// Function that manages querying, sorting, and displaying search results.
function searchvals(input) {
    let newPage = document.getElementById("results")
    let pages = []
    // Because this is a proof of concept our results are kind of limited and very static
    pages.push(new page('About', 'about.html', 'Interested in more about us?'))
    pages.push(new page('Stories', 'stories.html', 'Learn about some previous victums and their expierences.'))
    pages.push(new page('Donate', 'donate.html', 'Want to support us?'))
    pages.push(new page('Diagnosis', 'diagnosis.html', 'It is an important term we will use a lot. We believe defining this term would help you explore our website.'))
    pages.push(new page('Contact us', 'contactus.html', 'Have something important to tell us?'))
    pages.push(new page('Home', 'index.html', 'Our home page an important place to start. Albiet, you kinda had to be there to get here.'))
    pages.push(new page('Pill Shaming', './whatWeDoNotDo/pillShaming.html', 'It is cringe bro. we do not do it and neither should you.'))
    pages.push(new page('Spiritual interpretations of experiences commonly described as “psychosis”', './whatWeDoNotDo/promoteSpirit.html', 'We do not make any statements on it but provide an interesting list of reads.'))
    pages.push(new page('Give advice on how to make somebody adhere to a treatment', './whatWeDoNotDo/giveAdvice.html', 'This is not a resource we provide.'))
    pages.push(new page('Participate in terminological controversies', './whatWeDoNotDo/partakein.html', 'We do not participate in terminological controversies. We do not wish to fight over semantics.'))
    pages.push(new page('Promote treatments that are not supported by scientific evidence', './whatWeDoNotDo/promoteTreatments.html', 'This page is currently awaiting the writers to write this page. '))

    pages.push(new page('Fight stigma and discrimination', './whatWeDo/fightStigma.html', 'Page is waiting on content to be written.'))
    pages.push(new page('Foster a dialogue between family members and their loved ones diagnosed with mental illness', './whatWeDo/fosterDialouge.html', 'Page is waiting on content to be written.'))
    pages.push(new page('Share information about evidence-based treatment methods', './whatWeDo/shareInformation.html', 'Page is waiting on content to be written.'))
    pages.push(new page('Share our experience of what worked and what did not for us and our loved ones', './whatWeDo/shareOurExpience.html', 'Page is waiting on content to be written.'))
    pages.push(new page('Share tips about reading and understanding medical literature based on our personal experience', './whatWeDo/shareTips.html', 'Page is waiting on content to be written.'))

    pages.push(new page('Connect with other families for mutual support and education', './whatWeDo/shareTips.html', 'Page is waiting on content to be written.'))
    pages.push(new page('Provide a space for uncensored conversation for everyone interested in the subject of mental health', './whatWeDo/shareTips.html', 'Page is waiting on content to be written.'))

    pages = getLikeness(pages, input)
    pages = sortPages(pages)
    results.innerHTML = ''
    results.innerHTML = displayPages(pages)
}

// Determines how close the users search query is to the options.
function getLikeness(arr, input) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < input.length; j++) {
            if (arr[i].name[j] != input[j]) {
                // Removes points if there are different keys.
                arr[i].likeness -= 1;
            }
            // Removes additional points if the lengths are different.
            // arr[i].likeness -= Math.abs(input.length - arr[i].likeness.length)
        }

    }
    return arr;
}

//Selection sort because do we really need speed for so few results?
function sortPages(arr) {
    let temp = null
    let max = 0
    for (let i = 0; i < arr.length; i++) {
        max = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[max].likeness < arr[j].likeness) {
                max = j
            }
        }
        if (max != i) {
            temp = arr[i]
            arr[i] = arr[max]
            arr[max] = temp
        }

    }
    return arr;

}

function displayPages(arr) {
    let ans = ''
    let temp = ''
    for (let i = 0; i < arr.length; i++) {
        temp = "<div> <a href='"
        temp += arr[i].src
        temp += "'>"
        temp += arr[i].name
        temp += "</a> <br>"
        temp += arr[i].desc
        temp += "</div>"
        ans += temp
    } return ans
}

// Encapsulates page information.
class page {
    constructor(name, src, desc) {
        this.name = name
        this.src = src
        this.desc = desc
        this.likeness = 0 // We use a point deduction system to determine if its the user's element.
    }
}

main()