# How to Generate Resume PDF for Download

## Option 1: Compile LaTeX Resume to PDF

1. Navigate to the resume directory:
```bash
cd explainable-emotion-selfie
```

2. Compile the LaTeX file using pdflatex:
```bash
pdflatex main.tex
```

3. Copy the generated PDF to the portfolio public folder:
```bash
cp main.pdf ../portfolio-website/public/resume.pdf
```

## Option 2: Convert from Existing PDF

If you already have a PDF resume:

1. Rename it to `resume.pdf`
2. Place it in the `portfolio-website/public/` folder

## Option 3: Online LaTeX Compiler

1. Go to https://www.overleaf.com or similar LaTeX compiler
2. Upload `explainable-emotion-selfie/main.tex`
3. Download the compiled PDF
4. Rename and move to `portfolio-website/public/resume.pdf`

Once the PDF is in place, the download button on the website will work!
