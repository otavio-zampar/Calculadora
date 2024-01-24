function dataPtBr() {
    var data = [
        { group: "CÁLCULO", option: "Avaliação", form: "doEval", qnt: 1, exit: 1, placeholder: ["2 + 2"]},
        { group: "CÁLCULO", option: "Bhaskara", form: "bhaskara", qnt: 3, exit: 2, placeholder: ["A", "B", "C"]},
        { group: "CÁLCULO", option: "Função 1° grau", form: "fPrimeiro", qnt: 3, exit: 1, placeholder: ["X", "B", "C"]  },
        { group: "CÁLCULO", option: "Função 2° grau / Exponencial", form: "fSegundo", qnt: 4, exit: 1, placeholder: ["X", "A", "B", "C"]  },
        { group: "CÁLCULO", option: "Função 2° grau / Logarítmica", form: "fExponencial", qnt: 4, exit: 1, placeholder: ["X", "A", "B", "C"]  },
        { group: "OPERAÇÕES", option: "Fatoração", form: "fatoracao", qnt: 1, exit: 1, placeholder: []  },
        { group: "ÁREA", option: "Área círculo", form: "Acirculo", qnt: 1, exit: 1, placeholder: ["Raio"]},
        { group: "ÁREA", option: "Área retângulo", form: "Aretangulo", qnt: 2, exit: 1, placeholder: ["Base", "Altura"] },
        { group: "ÁREA", option: "Área triângulo", form: "Atriangulo", qnt: 2, exit: 1, placeholder: ["Base", "Altura"] },
        { group: "ÁREA", option: "Área triângulo equilátero", form: "AtrianguloEquilatero", qnt: 1, exit: 1, placeholder: ["Lado"] },
        { group: "ÁREA", option: "Área trapézio", form: "Atrapezio", qnt: 3, exit: 1, placeholder: ["Base", "base", "Altura"] },
        { group: "ÁREA", option: "Área losango", form: "Alosango", qnt: 2, exit: 1, placeholder: ["Diagonal", "diagonal"] },
        { group: "ÁREA", option: "Área ângulo triângulo", form: "AanguloTriangulo", qnt: 3, exit: 1, placeholder: ["Lado 1", "Lado 2", "Angulo"]  },
        { group: "VOLUME", option: "Volume cubo", form: "Vcubo", qnt: 1, exit: 1, placeholder: ["Lado"]  },
        { group: "VOLUME", option: "Volume paralelepípedo", form: "Vparalelepipedo", qnt: 3, exit: 1, placeholder: ["Largura", "Comprimento", "Altura"]  },
        { group: "VOLUME", option: "Volume cilindro", form: "Vcilindro", qnt: 2, exit: 1, placeholder: ["Raio", "Altura"]  },
        { group: "VOLUME", option: "Volume esfera", form: "Vesfera", qnt: 1, exit: 1, placeholder: ["Raio"]  },
        { group: "VOLUME", option: "Volume cone", form: "Vcone", qnt: 2, exit: 1, placeholder: ["Raio", "Altura"]  },
        { group: "VOLUME", option: "Volume prisma", form: "Vprisma", qnt: 2, exit: 1, placeholder: ["Área da Base", "Altura"]  },
        { group: "GEOMETRIA", option: "Hipotenusa", form: "hipotenusa", qnt: 2, exit: 1, placeholder: ["Cateto", "cateto"]  },
        { group: "GEOMETRIA", option: "Cateto", form: "cateto", qnt: 2, exit: 1, placeholder: ["Cateto", "Hipotenusa"]  },
        { group: "GEOMETRIA", option: "Perímetro", form: "perimetro", qnt: 2, exit: 1, placeholder: ["Lado", "Tamanho"]  },
        { group: "OPERAÇÕES", option: "Soma", form: "soma", qnt: 2, exit: 1, placeholder: []  },
        { group: "OPERAÇÕES", option: "Subtração", form: "subtracao", qnt: 2, exit: 1, placeholder: []  },
        { group: "OPERAÇÕES", option: "Multiplicação", form: "multiplicacao", qnt: 2, exit: 1, placeholder: []  },
        { group: "OPERAÇÕES", option: "Divisão", form: "divisao", qnt: 2, exit: 1, placeholder: []  },
        { group: "OPERAÇÕES", option: "Exponencial", form: "Math.pow", qnt: 2, exit: 1, placeholder: ["Base", "Expoente"]  },
        { group: "OPERAÇÕES", option: "Raiz", form: "raizQ", qnt: 2, exit: 1, placeholder: ["Radicando", "Índice"]  },
        { group: "OPERAÇÕES", option: "Logarítmo Natural", form: "log", qnt: 1, exit: 1, placeholder: []  },
        { group: "OPERAÇÕES", option: "Logarítmo Base 10", form: "log10", qnt: 1, exit: 1, placeholder: []  },
        { group: "OPERAÇÕES", option: "Logarítmo Base 2", form: "log2", qnt: 1, exit: 1, placeholder: []  },
        { group: "OPERAÇÕES", option: "Inverso", form: "inversao", qnt: 1, exit: 1, placeholder: []  },
        { group: "OPERAÇÕES", option: "Módulo", form: "modulo", qnt: 1, exit: 1, placeholder: []  },
        { group: "GEOMETRIA", option: "Seno", form: "Math.sin", qnt: 1, exit: 1, placeholder: ["Seno"]  },
        { group: "GEOMETRIA", option: "Coseno", form: "Math.cos", qnt: 1, exit: 1, placeholder: ["Coseno"]  },
        { group: "GEOMETRIA", option: "Tangente", form: "Math.tan", qnt: 1, exit: 1, placeholder: ["Tangente"]  },
        { group: "ESPECIAIS", option: "Aleatório", form: "aleatorio", qnt: 2, exit: 1, placeholder: ["Mínimo", "Máximo"] },
        { group: "COMPUTAÇÃO", option: "Bit Shift Zero Esquerda", form: "bitShiftZL", qnt: 2, exit: 1, placeholder: ["5 (0b101)", "2 (0b10)"] },
        { group: "COMPUTAÇÃO", option: "Bit Shift Assinado Direita", form: "bitShiftSR", qnt: 2, exit: 1, placeholder: ["5 (0b101)", "2 (0b10)"] },
        { group: "COMPUTAÇÃO", option: "Bit Shift Zero Direita", form: "bitShiftZR", qnt: 2, exit: 1, placeholder: ["5 (0b101)", "2 (0b10)"] },
        { group: "COMPUTAÇÃO", option: "E", form: "and", qnt: 2, exit: 1, placeholder: ["5 (0b101)", "2 (0b10)"] },
        { group: "COMPUTAÇÃO", option: "OU", form: "or", qnt: 2, exit: 1, placeholder: ["5 (0b101)", "2 (0b10)"] },
        { group: "COMPUTAÇÃO", option: "XOR", form: "xor", qnt: 2, exit: 1, placeholder: ["5 (0b101)", "2 (0b10)"] },
        { group: "COMPUTAÇÃO", option: "Não", form: "not", qnt: 1, exit: 1, placeholder: [] },
        { group: "COMPUTAÇÃO", option: "Binário", form: "binario", qnt: 1, exit: 1, placeholder: [] },
        { group: "COMPUTAÇÃO", option: "Hexadecimal", form: "hexadecimal", qnt: 1, exit: 1, placeholder: [] },
        { group: "COMPUTAÇÃO", option: "Octal", form: "octal", qnt: 1, exit: 1, placeholder: [] },
        { group: "COMPUTAÇÃO", option: "Base X", form: "base", qnt: 2, exit: 1, placeholder: ["X", "Base"] },
        { group: "COMPUTAÇÃO", option: "Base X para Decimal", form: "basePraDecimal", qnt: 2, exit: 1, placeholder: ["X", "Base"] },
        { group: "ESPECIAIS", option: "Faixa", form: "input", type: "range", qnt: 1, exit: 1 },
        { group: "ESPECIAIS", option: "Caixa de Texto", form: "textarea", type: "", qnt: 0, exit: 0}
        // Adicione outras opções com mensagens personalizadas aqui
    ];
    return data;
}

function dataSpMx() {
    var data = [
        { group: "CÁLCULO", option: "Evaluación", form: "doEval", qnt: 1, exit: 1, placeholder: ["2 + 2"]},
        { group: "CÁLCULO", option: "Bhaskara", form: "bhaskara", qnt: 3, exit: 2, placeholder: ["A", "B", "C"]},
        { group: "ÁREA", option: "Área círculo", form: "Acirculo", qnt: 1, exit: 1, placeholder: ["Radio"]},
        { group: "ÁREA", option: "Área rectángulo", form: "Aretangulo", qnt: 2, exit: 1, placeholder: ["Base", "Altura"] },
        { group: "ÁREA", option: "Área triángulo", form: "Atriangulo", qnt: 2, exit: 1, placeholder: ["Base", "Altura"] },
        { group: "ÁREA", option: "Área triángulo equilátero", form: "AtrianguloEquilatero", qnt: 1, exit: 1, placeholder: ["Lado"] },
        { group: "ÁREA", option: "Área trapecio", form: "Atrapezio", qnt: 3, exit: 1, placeholder: ["Base", "base", "Altura"] },
        { group: "ÁREA", option: "Área rombo", form: "Alosango", qnt: 2, exit: 1, placeholder: ["Diagonal", "diagonal"] },
        { group: "ÁREA", option: "Área ángulo triángulo", form: "AanguloTriangulo", qnt: 3, exit: 1, placeholder: ["Lado 1", "Lado 2", "Ángulo"]  },
        { group: "OPERACIONES", option: "Factorización", form: "fatoracao", qnt: 1, exit: 1, placeholder: []  },
        { group: "GEOMETRÍA", option: "Hipotenusa", form: "hipotenusa", qnt: 2, exit: 1, placeholder: ["Cateto", "cateto"]  },
        { group: "GEOMETRÍA", option: "Cateto", form: "cateto", qnt: 2, exit: 1, placeholder: ["Cateto", "Hipotenusa"]  },
        { group: "GEOMETRÍA", option: "Perímetro", form: "perimetro", qnt: 2, exit: 1, placeholder: ["Lado", "Tamaño"]  },
        { group: "VOLUMEN", option: "Volumen cubo", form: "Vcubo", qnt: 1, exit: 1, placeholder: ["Lado"]  },
        { group: "VOLUMEN", option: "Volumen paralelepípedo", form: "Vparalelepipedo", qnt: 3, exit: 1, placeholder: ["Ancho", "Longitud", "Altura"]  },
        { group: "VOLUMEN", option: "Volumen cilindro", form: "Vcilindro", qnt: 2, exit: 1, placeholder: ["Radio", "Altura"]  },
        { group: "VOLUMEN", option: "Volumen esfera", form: "Vesfera", qnt: 1, exit: 1, placeholder: ["Radio"]  },
        { group: "VOLUMEN", option: "Volumen cono", form: "Vcone", qnt: 2, exit: 1, placeholder: ["Radio", "Altura"]  },
        { group: "VOLUMEN", option: "Volumen prisma", form: "Vprisma", qnt: 2, exit: 1, placeholder: ["Área de la Base", "Altura"]  },
        { group: "OPERACIONES", option: "Suma", form: "soma", qnt: 2, exit: 1, placeholder: []  },
        { group: "OPERACIONES", option: "Resta", form: "subtracao", qnt: 2, exit: 1, placeholder: []  },
        { group: "OPERACIONES", option: "Multiplicación", form: "multiplicacao", qnt: 2, exit: 1, placeholder: []  },
        { group: "OPERACIONES", option: "División", form: "divisao", qnt: 2, exit: 1, placeholder: []  },
        { group: "OPERACIONES", option: "Exponencial", form: "Math.pow", qnt: 2, exit: 1, placeholder: ["Base", "Exponente"]  },
        { group: "OPERACIONES", option: "Raíz", form: "raizQ", qnt: 2, exit: 1, placeholder: ["Radicando", "Índice"]  },
        { group: "OPERACIONES", option: "Logaritmo Natural", form: "log", qnt: 1, exit: 1, placeholder: []  },
        { group: "OPERACIONES", option: "Logaritmo Base 10", form: "log10", qnt: 1, exit: 1, placeholder: []  },
        { group: "OPERACIONES", option: "Logaritmo Base 2", form: "log2", qnt: 1, exit: 1, placeholder: []  },
        { group: "OPERACIONES", option: "Inverso", form: "inversao", qnt: 1, exit: 1, placeholder: []  },
        { group: "OPERACIONES", option: "Módulo", form: "modulo", qnt: 1, exit: 1, placeholder: []  },
        { group: "CÁLCULO", option: "Función de 1° grado", form: "fPrimeiro", qnt: 3, exit: 1, placeholder: ["X", "B", "C"]  },
        { group: "CÁLCULO", option: "Función de 2° grado / Exponencial", form: "fSegundo", qnt: 4, exit: 1, placeholder: ["X", "A", "B", "C"]  },
        { group: "CÁLCULO", option: "Función de 2° grado / Logarítmica", form: "fExponencial", qnt: 4, exit: 1, placeholder: ["X", "A", "B", "C"]  },
        { group: "GEOMETRÍA", option: "Seno", form: "Math.sin", qnt: 1, exit: 1, placeholder: ["Seno"]  },
        { group: "GEOMETRÍA", option: "Coseno", form: "Math.cos", qnt: 1, exit: 1, placeholder: ["Coseno"]  },
        { group: "GEOMETRÍA", option: "Tangente", form: "Math.tan", qnt: 1, exit: 1, placeholder: ["Tangente"]  },
        { group: "ESPECIALES", option: "Aleatorio", form: "aleatorio", qnt: 2, exit: 1, placeholder: ["Mínimo", "Máximo"] },
        { group: "COMPUTACIÓN", option: "Bit Shift Izquierda Cero", form: "bitShiftZL", qnt: 2, exit: 1, placeholder: ["X", "Y"] },
        { group: "COMPUTACIÓN", option: "Bit Shift Derecha Signado", form: "bitShiftSR", qnt: 2, exit: 1, placeholder: ["X", "Y"] },
        { group: "COMPUTACIÓN", option: "Bit Shift Derecha Cero", form: "bitShiftZR", qnt: 2, exit: 1, placeholder: ["X", "Y"] },
        { group: "COMPUTACIÓN", option: "Y", form: "and", qnt: 2, exit: 1, placeholder: ["X", "Y"] },
        { group: "COMPUTACIÓN", option: "O", form: "or", qnt: 2, exit: 1, placeholder: ["X", "Y"] },
        { group: "COMPUTACIÓN", option: "XOR", form: "xor", qnt: 2, exit: 1, placeholder: ["X", "Y"] },
        { group: "COMPUTACIÓN", option: "No", form: "not", qnt: 1, exit: 1, placeholder: [] },
        { group: "COMPUTACIÓN", option: "Binario", form: "binario", qnt: 1, exit: 1, placeholder: [] },
        { group: "COMPUTACIÓN", option: "Hexadecimal", form: "hexadecimal", qnt: 1, exit: 1, placeholder: [] },
        { group: "COMPUTACIÓN", option: "Octal", form: "octal", qnt: 1, exit: 1, placeholder: [] },
        { group: "COMPUTACIÓN", option: "Base X", form: "base", qnt: 2, exit: 1, placeholder: ["X", "Base"] },
        { group: "COMPUTACIÓN", option: "Base X a Decimal", form: "basePraDecimal", qnt: 2, exit: 1, placeholder: ["X", "Base"] },
        { group: "ESPECIALES", option: "Rango", form: "input", type: "range", qnt: 1, exit: 1 },
        { group: "ESPECIALES", option: "Área de texto", form: "textarea", type: "", qnt: 0, exit: 0}    
        // Adicione outras opções com mensagens personalizadas aqui
    ];
    return data;
}

function dataEnUs(){
    var data = [
        { group: "CALCULUS", option: "Evaluation", form: "doEval", qnt: 1, exit: 1, placeholder: ["2 + 2"] },
        { group: "CALCULUS", option: "Bhaskara", form: "bhaskara", qnt: 3, exit: 2, placeholder: ["A", "B", "C"] },
        { group: "AREA", option: "Circle Area", form: "Acirculo", qnt: 1, exit: 1, placeholder: ["Radius"] },
        { group: "AREA", option: "Rectangle Area", form: "Aretangulo", qnt: 2, exit: 1, placeholder: ["Base", "Height"] },
        { group: "AREA", option: "Triangle Area", form: "Atriangulo", qnt: 2, exit: 1, placeholder: ["Base", "Height"] },
        { group: "AREA", option: "Equilateral Triangle Area", form: "AtrianguloEquilatero", qnt: 1, exit: 1, placeholder: ["Side"] },
        { group: "AREA", option: "Trapezoid Area", form: "Atrapezio", qnt: 3, exit: 1, placeholder: ["Base", "Top Base", "Height"] },
        { group: "AREA", option: "Diamond Area", form: "Alosango", qnt: 2, exit: 1, placeholder: ["Diagonal", "Diagonal"] },
        { group: "AREA", option: "Triangle Angle Area", form: "AanguloTriangulo", qnt: 3, exit: 1, placeholder: ["Side 1", "Side 2", "Angle"] },
        { group: "OPERATIONS", option: "Factoring", form: "fatoracao", qnt: 1, exit: 1, placeholder: [] },
        { group: "GEOMETRY", option: "Hypotenuse", form: "hipotenusa", qnt: 2, exit: 1, placeholder: ["Cathetus", "Cathetus"] },
        { group: "GEOMETRY", option: "Cathetus", form: "cateto", qnt: 2, exit: 1, placeholder: ["Cathetus", "Hypotenuse"] },
        { group: "GEOMETRY", option: "Perimeter", form: "perimetro", qnt: 2, exit: 1, placeholder: ["Side", "Length"] },
        { group: "VOLUME", option: "Cube Volume", form: "Vcubo", qnt: 1, exit: 1, placeholder: ["Side"] },
        { group: "VOLUME", option: "Parallelepiped Volume", form: "Vparalelepipedo", qnt: 3, exit: 1, placeholder: ["Width", "Length", "Height"] },
        { group: "VOLUME", option: "Cylinder Volume", form: "Vcilindro", qnt: 2, exit: 1, placeholder: ["Radius", "Height"] },
        { group: "VOLUME", option: "Sphere Volume", form: "Vesfera", qnt: 1, exit: 1, placeholder: ["Radius"] },
        { group: "VOLUME", option: "Cone Volume", form: "Vcone", qnt: 2, exit: 1, placeholder: ["Radius", "Height"] },
        { group: "VOLUME", option: "Prism Volume", form: "Vprisma", qnt: 2, exit: 1, placeholder: ["Base Area", "Height"] },
        { group: "OPERATIONS", option: "Sum", form: "soma", qnt: 2, exit: 1, placeholder: [] },
        { group: "OPERATIONS", option: "Subtraction", form: "subtracao", qnt: 2, exit: 1, placeholder: [] },
        { group: "OPERATIONS", option: "Multiplication", form: "multiplicacao", qnt: 2, exit: 1, placeholder: [] },
        { group: "OPERATIONS", option: "Division", form: "divisao", qnt: 2, exit: 1, placeholder: [] },
        { group: "OPERATIONS", option: "Exponential", form: "Math.pow", qnt: 2, exit: 1, placeholder: ["Base", "Exponent"] },
        { group: "OPERATIONS", option: "Square Root", form: "raizQ", qnt: 2, exit: 1, placeholder: ["Radical", "Index"] },
        { group: "OPERATIONS", option: "Natural Logarithm", form: "log", qnt: 1, exit: 1, placeholder: [] },
        { group: "OPERATIONS", option: "Logarithm Base 10", form: "log10", qnt: 1, exit: 1, placeholder: [] },
        { group: "OPERATIONS", option: "Logarithm Base 2", form: "log2", qnt: 1, exit: 1, placeholder: [] },
        { group: "OPERATIONS", option: "Inverse", form: "inversao", qnt: 1, exit: 1, placeholder: [] },
        { group: "OPERATIONS", option: "Modulus", form: "modulo", qnt: 1, exit: 1, placeholder: [] },
        { group: "CALCULUS", option: "Linear Function", form: "fPrimeiro", qnt: 3, exit: 1, placeholder: ["X", "B", "C"] },
        { group: "CALCULUS", option: "Quadratic/Exponential Function", form: "fSegundo", qnt: 4, exit: 1, placeholder: ["X", "A", "B", "C"] },
        { group: "CALCULUS", option: "Quadratic/Logarithmic Function", form: "fExponencial", qnt: 4, exit: 1, placeholder: ["X", "A", "B", "C"] },
        { group: "GEOMETRY", option: "Sine", form: "Math.sin", qnt: 1, exit: 1, placeholder: ["Sine"] },
        { group: "GEOMETRY", option: "Cosine", form: "Math.cos", qnt: 1, exit: 1, placeholder: ["Cosine"] },
        { group: "GEOMETRY", option: "Tangent", form: "Math.tan", qnt: 1, exit: 1, placeholder: ["Tangent"] },
        { group: "SPECIALS", option: "Random", form: "aleatorio", qnt: 2, exit: 1, placeholder: ["Minimum", "Maximum"] },
        { group: "COMPUTING", option: "Bit Shift Zero Left", form: "bitShiftZL", qnt: 2, exit: 1, placeholder: ["X", "Y"] },
        { group: "COMPUTING", option: "Bit Shift Signed Right", form: "bitShiftSR", qnt: 2, exit: 1, placeholder: ["X", "Y"] },
        { group: "COMPUTING", option: "Bit Shift Zero Right", form: "bitShiftZR", qnt: 2, exit: 1, placeholder: ["X", "Y"] },
        { group: "COMPUTING", option: "AND", form: "and", qnt: 2, exit: 1, placeholder: ["X", "Y"] },
        { group: "COMPUTING", option: "OR", form: "or", qnt: 2, exit: 1, placeholder: ["X", "Y"] },
        { group: "COMPUTING", option: "XOR", form: "xor", qnt: 2, exit: 1, placeholder: ["X", "Y"] },
        { group: "COMPUTING", option: "NOT", form: "not", qnt: 1, exit: 1, placeholder: [] },
        { group: "COMPUTING", option: "Binary", form: "binario", qnt: 1, exit: 1, placeholder: [] },
        { group: "COMPUTING", option: "Hexadecimal", form: "hexadecimal", qnt: 1, exit: 1, placeholder: [] },
        { group: "COMPUTING", option: "Octal", form: "octal", qnt: 1, exit: 1, placeholder: [] },
        { group: "COMPUTING", option: "Base X", form: "base", qnt: 2, exit: 1, placeholder: ["X", "Base"] },
        { group: "COMPUTING", option: "Base X to Decimal", form: "basePraDecimal", qnt: 2, exit: 1, placeholder: ["X", "Base"] },
        { group: "SPECIALS", option: "Range", form: "input", type: "range", qnt: 1, exit: 1 },
        { group: "SPECIALS", option: "Text Area", form: "textarea", type: "", qnt: 0, exit: 0 }
        
        // Adicione outras opções com mensagens personalizadas aqui
    ];
    return data;
}

function dataBarren() { // não possui option nem group 
    var data = [
        { form: "doEval", qnt: 1, exit: 1, placeholder: ["2 + 2"]},
        { form: "bhaskara", qnt: 3, exit: 2, placeholder: ["A", "B", "C"]},
        { form: "fPrimeiro", qnt: 3, exit: 1, placeholder: ["X", "B", "C"]  },
        { form: "fSegundo", qnt: 4, exit: 1, placeholder: ["X", "A", "B", "C"]  },
        { form: "fExponencial", qnt: 4, exit: 1, placeholder: ["X", "A", "B", "C"]  },
        { form: "fatoracao", qnt: 1, exit: 1, placeholder: []  },
        { form: "Acirculo", qnt: 1, exit: 1, placeholder: ["Raio"]},
        { form: "Aretangulo", qnt: 2, exit: 1, placeholder: ["Base", "Altura"] },
        { form: "Atriangulo", qnt: 2, exit: 1, placeholder: ["Base", "Altura"] },
        { form: "AtrianguloEquilatero", qnt: 1, exit: 1, placeholder: ["Lado"] },
        { form: "Atrapezio", qnt: 3, exit: 1, placeholder: ["Base", "base", "Altura"] },
        { form: "Alosango", qnt: 2, exit: 1, placeholder: ["Diagonal", "diagonal"] },
        { form: "AanguloTriangulo", qnt: 3, exit: 1, placeholder: ["Lado 1", "Lado 2", "Angulo"]  },
        { form: "Vcubo", qnt: 1, exit: 1, placeholder: ["Lado"]  },
        { form: "Vparalelepipedo", qnt: 3, exit: 1, placeholder: ["Largura", "Comprimento", "Altura"]  },
        { form: "Vcilindro", qnt: 2, exit: 1, placeholder: ["Raio", "Altura"]  },
        { form: "Vesfera", qnt: 1, exit: 1, placeholder: ["Raio"]  },
        { form: "Vcone", qnt: 2, exit: 1, placeholder: ["Raio", "Altura"]  },
        { form: "Vprisma", qnt: 2, exit: 1, placeholder: ["Área da Base", "Altura"]  },
        { form: "hipotenusa", qnt: 2, exit: 1, placeholder: ["Cateto", "cateto"]  },
        { form: "cateto", qnt: 2, exit: 1, placeholder: ["Cateto", "Hipotenusa"]  },
        { form: "perimetro", qnt: 2, exit: 1, placeholder: ["Lado", "Tamanho"]  },
        { form: "soma", qnt: 2, exit: 1, placeholder: []  },
        { form: "subtracao", qnt: 2, exit: 1, placeholder: []  },
        { form: "multiplicacao", qnt: 2, exit: 1, placeholder: []  },
        { form: "divisao", qnt: 2, exit: 1, placeholder: []  },
        { form: "Math.pow", qnt: 2, exit: 1, placeholder: ["Base", "Expoente"]  },
        { form: "raizQ", qnt: 2, exit: 1, placeholder: ["Radicando", "Índice"]  },
        { form: "log", qnt: 1, exit: 1, placeholder: []  },
        { form: "log10", qnt: 1, exit: 1, placeholder: []  },
        { form: "log2", qnt: 1, exit: 1, placeholder: []  },
        { form: "inversao", qnt: 1, exit: 1, placeholder: []  },
        { form: "modulo", qnt: 1, exit: 1, placeholder: []  },
        { form: "Math.sin", qnt: 1, exit: 1, placeholder: ["Seno"]  },
        { form: "Math.cos", qnt: 1, exit: 1, placeholder: ["Coseno"]  },
        { form: "Math.tan", qnt: 1, exit: 1, placeholder: ["Tangente"]  },
        { form: "aleatorio", qnt: 2, exit: 1, placeholder: ["Mínimo", "Máximo"] },
        { form: "bitShiftZL", qnt: 2, exit: 1, placeholder: ["5 (0b101)", "2 (0b10)"] },
        { form: "bitShiftSR", qnt: 2, exit: 1, placeholder: ["5 (0b101)", "2 (0b10)"] },
        { form: "bitShiftZR", qnt: 2, exit: 1, placeholder: ["5 (0b101)", "2 (0b10)"] },
        { form: "and", qnt: 2, exit: 1, placeholder: ["5 (0b101)", "2 (0b10)"] },
        { form: "or", qnt: 2, exit: 1, placeholder: ["5 (0b101)", "2 (0b10)"] },
        { form: "xor", qnt: 2, exit: 1, placeholder: ["5 (0b101)", "2 (0b10)"] },
        { form: "not", qnt: 1, exit: 1, placeholder: [] },
        { form: "binario", qnt: 1, exit: 1, placeholder: [] },
        { form: "hexadecimal", qnt: 1, exit: 1, placeholder: [] },
        { form: "octal", qnt: 1, exit: 1, placeholder: [] },
        { form: "base", qnt: 2, exit: 1, placeholder: ["X", "Base"] },
        { form: "basePraDecimal", qnt: 2, exit: 1, placeholder: ["X", "Base"] },
        { form: "input", type: "range", qnt: 1, exit: 1 },
        { form: "textarea", type: "", qnt: 0, exit: 0}
        // Adicione outras opções com mensagens personalizadas aqui
    ];
    return data;
}