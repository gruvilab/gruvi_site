# GrUVi website

We are an inter-disciplinary team of researchers exploring and developing novel methods in computer graphics, computer vision, and interactive techniques. Current areas of focus include geometric modelling and processing, image-based modelling, 3D reconstruction, 3D content creation, shape analysis, lighting and reflectance models, and 3D vision for robotics.

The lab was first founded in 1992 by Professor Tom Calvert whose work in human animation led to the now famous LifeForms software and the startup firm Credo Inc. Today, we have a modern infrastructure, supported through two Canadian Foundation for Innovation (CFI) grants and two NSERC Research Tools and Instruments grants. Student support is provided by NSERC Discovery Grants, several NSERC Strategic Project Grants, along with funding from GRAND NCE, MITACS, and Precarn. Three GrUVi faculty have won the prestigious NSERC Discovery Accelerator grants.

We collaborate with gaming, VFX, and geo-map industries and leading researchers from across the globe. One of the industrial internships carried out by members of the lab had won an Award of Excellence from MITACS, the funding agency.

While you will find many of our alumni all across the private sector at places such as Apple, Electronic Arts, Google, and Facebook, some of our best graduates are now professors at Carleton University, University of Calgary, University of Florida, and University of Victoria.

GrUVi Lab is at the Simon Fraser University atop of Burnaby Mountain in the Technology And Science Complex, room TASC 8004. If you'd like to visit, instructions on how to get here are on the main SFU site. If you'd like to correspond with us in other ways, here is our address:

GrUVi Lab, TASC Building 8004
School Of Computing Science
Simon Fraser University
8888 University Drive
Burnaby, B.C. V5A 1S6
Canada

Phone: +1 (778) 782-3610
Fax: +1 (778) 782-3045

Email: haoz (at) sfu.ca

Code is a Copyright of Allan Lab. Code released under the MIT License.

# Usage

There is two repos for the gruvi site. The currently **active** one is **gruvilab.github.io** (which is gruvi.ca). The old one is gruvi_site (which is gruvi.cs.sfu.ca). When we run the script to sync the update to the active website, the script also push the update to the old site to keep the content the same.
The textural data is stored in _data folder and images in images folder.

To build the website locally for faster iteration (github auto CI's speed is slow due to heavy upload), you can use jekyll-docker. After you pulled the jekyll docker image, you can just run `bash docker_build.sh` in the `scripts` folder to build the website and view the built site in `_site` folder. More information about jekyll-docker can be found [here](https://github.com/envygeeks/jekyll-docker/blob/master/README.md)

## Update
As of 2023-06-12, we adopt notion databases to store our new publication data. Notion databases is much easier to manage and very friendly for multi-user editing.
The notion homepage for our website is [here](https://www.notion.so/yanxg/SFU-GrUVi-Website-Databases-052be593dbe246668fdb123b682debb8).
Some scripts for fetching notion data to the website repo can be found in the `scripts` folder.



